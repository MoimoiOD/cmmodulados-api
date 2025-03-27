import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WabaTemplate } from '../entities/waba-template/waba-template.entity';
import { Repository } from 'typeorm';
import { Connection } from '../entities/waba-template/connection.entity';
import { WabaTemplateComponent } from '../entities/waba-template/waba-template-component.entity';
import { CreateWabaTemplateDto } from '../dto/waba-template/create-waba-template.dto';
import { CreateConnectionDto } from '../dto/waba-template/connection/create-connection.dto';
import { CreateWabaComponentButtonDto } from '../dto/waba-template/waba-component-button/create-waba-component-button.dto';
import { WabaComponentButton } from '../entities/waba-template/waba-component-button.entity';

@Injectable()
export class WabaTemplateService {
  token = '1f7e1c970adf60b4ac6dc56afbc4edcd3ed52de8656fb38f7e899bff6889';
  url_waba_template = 'https://cmmodulados.gosac.com.br/api/wabatemplate';

  constructor(
    @InjectRepository(WabaTemplate)
    private readonly wabaTemplateRepository: Repository<WabaTemplate>,
    @InjectRepository(Connection)
    private readonly connectionRepository: Repository<Connection>,
    @InjectRepository(WabaTemplateComponent)
    private readonly wabaTemplateComponentRepository: Repository<WabaTemplateComponent>,
    @InjectRepository(WabaComponentButton)
    private readonly wabaComponentButtonRepository: Repository<WabaComponentButton>,
  ) {}

  async startChatbot(): Promise<any> {
    const createWabaTemplateDto = await this.fetchWabaTemplate();
    await this.saveTemplates(createWabaTemplateDto);
  }

  async saveTemplates(createWabaTemplateDto: CreateWabaTemplateDto[]): Promise<void> {
    if(!createWabaTemplateDto) {
      console.log('Não há templates existentes.');
      return;
    }
    for (const wabaTemplate of createWabaTemplateDto) {
      await this.saveConnection(wabaTemplate);
      await this.saveWabaComponentButton(wabaTemplate);
    }
    // console.log(createWabaTemplateDto);
  }

  async createConnection(createConnectionDto: CreateConnectionDto): Promise<void> {
    if (!createConnectionDto) {
      console.log('A conexão não foi informada.');
      return;
    }
    const existingConnection = await this.connectionRepository.findOneBy({ id: createConnectionDto.id });
    
    if (existingConnection) {
      const hasChanges = JSON.stringify(existingConnection) !== JSON.stringify(createConnectionDto);
      if (!hasChanges) {
        await this.connectionRepository.update(existingConnection.id, createConnectionDto);
        console.log(`Conexão com ID ${existingConnection.id} foi atualizado.`);
      } else {
        console.log(`Conexão com ID ${existingConnection.id} já existe e os dados são compatíveis.`);
      }
    } else {
      const connection = this.connectionRepository.create(createConnectionDto);
      await this.connectionRepository.save(connection);
      console.log(`Nova conexão com ID ${createConnectionDto.id} foi criado.`);
    }
  }

  async saveConnection(createWabaTemplateDto: CreateWabaTemplateDto): Promise<void> {
    const connection = createWabaTemplateDto.connection;
    if (connection) {
      await this.createConnection(connection);
    } else {
      console.log('Não há conexões existentes.');
    }
  }

  async createWabaComponentButton(createWabaComponentButtonDto: CreateWabaComponentButtonDto): Promise<void> {
    if (!createWabaComponentButtonDto) {
      console.log('Os botões não foram informados.');
      return;
    }
    const existingWabaComponentButton = await this.wabaComponentButtonRepository.findOneBy({ id: createWabaComponentButtonDto.id });
    
    if (existingWabaComponentButton) {
      const hasChanges = JSON.stringify(existingWabaComponentButton) !== JSON.stringify(createWabaComponentButtonDto);
      if (!hasChanges) {
        await this.wabaComponentButtonRepository.update(existingWabaComponentButton.id, createWabaComponentButtonDto);
        console.log(`Botão com ID ${existingWabaComponentButton.id} foi atualizado.`);
      } else {
        console.log(`Botão com ID ${existingWabaComponentButton.id} já existe e os dados são compatíveis.`);
      }
    } else {
      const wabaComponentButton = this.wabaComponentButtonRepository.create(createWabaComponentButtonDto);
      await this.wabaComponentButtonRepository.save(wabaComponentButton);
      console.log(`Novo botão com ID ${createWabaComponentButtonDto.id} foi criado.`);
    }
  }

  async saveWabaComponentButton(createWabaTemplateDto: CreateWabaTemplateDto): Promise<void> {
    const wabaComponentButton: WabaComponentButton[] = createWabaTemplateDto.wabaTemplateComponents?.map((wabaComponent) => wabaComponent);
    if (wabaComponentButton) {
      await this.createWabaComponentButton(wabaComponentButton);
    } else {
      console.log('Não há botões existentes.');
    }
  }

  async fetchWabaTemplate(): Promise<CreateWabaTemplateDto[]> {
    try {
      const response = await fetch(this.url_waba_template, {
        method: 'GET',
        headers: {
          Authorization: `INTEGRATION ${this.token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(
          `Erro na requisição: ${response.status} - ${response.statusText}`,
        );
      }
  
      const data: CreateWabaTemplateDto[] = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar usuários:', error.message);
      throw error;
    }
  }
  
  async delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
