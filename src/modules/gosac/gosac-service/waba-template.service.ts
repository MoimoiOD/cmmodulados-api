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
import { CreateWabaVariablesDescriptionsDto } from '../dto/waba-template/waba-variables-descriptions/create-waba-variables-descriptions.dto';
import { WabaVariablesDescriptions } from '../entities/waba-template/waba-variables-descriptions.entity';

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
    @InjectRepository(WabaVariablesDescriptions)
    private readonly wabaVariablesDescriptionsRepository: Repository<WabaVariablesDescriptions>,
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
      let connection = await this.saveConnection(wabaTemplate);
      await this.saveWabaComponentButton(wabaTemplate);
      await this.saveWabaVariablesDescription(wabaTemplate);
    }
    // console.log(createWabaTemplateDto[0].wabaTemplateComponents);
    // console.log(createWabaTemplateDto[0].wabaTemplateComponents![0].wabaComponentButton);
  }

  async createConnection(createConnectionDto: CreateConnectionDto): Promise<Connection | null> {
    if (!createConnectionDto) {
      console.log('A conexão não foi informada.');
      return null;
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
      console.log(`Nova conexão com ID ${createConnectionDto.id} foi criado.`);
      return await this.connectionRepository.save(connection);
    }
    return null;
  }

  async saveConnection(createWabaTemplateDto: CreateWabaTemplateDto): Promise<Connection | null> {
    const connection = createWabaTemplateDto.connection;
    if (connection) {
      return await this.createConnection(connection);
    } else {
      console.log('Não há conexões existentes.');
      return null
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
    const wabaTemplateComponents = createWabaTemplateDto.wabaTemplateComponents;
    if (!wabaTemplateComponents || wabaTemplateComponents.length === 0) {
      console.log('Não há componentes, logo não há botões para salvar.');
      return;
    }
    for (const wabaTemplateComponent of wabaTemplateComponents) {
      if(!wabaTemplateComponent.wabaComponentButton || wabaTemplateComponent.wabaComponentButton.length === 0) {
        console.log('Não há botões de componente para salvar.');
        continue;
      }
      for(const wabaComponentButton of wabaTemplateComponent.wabaComponentButton) {
        await this.createWabaComponentButton(wabaComponentButton);
      }
    }
  }

  async createWabaVariablesDescription(createWabaVariablesDescriptionDto: CreateWabaVariablesDescriptionsDto): Promise<void> {
    if (!createWabaVariablesDescriptionDto) {
      console.log('As variáveis não foram informadas.');
      return;
    }
    const existingWabaVariablesDescription = await this.wabaVariablesDescriptionsRepository.findOneBy({ id: createWabaVariablesDescriptionDto.id });
    
    if (existingWabaVariablesDescription) {
      const hasChanges = JSON.stringify(existingWabaVariablesDescription) !== JSON.stringify(createWabaVariablesDescriptionDto);
      if (!hasChanges) {
        await this.wabaVariablesDescriptionsRepository.update(existingWabaVariablesDescription.id, createWabaVariablesDescriptionDto);
        console.log(`Variável com ID ${existingWabaVariablesDescription.id} foi atualizado.`);
      } else {
        console.log(`Variável com ID ${existingWabaVariablesDescription.id} já existe e os dados são compatíveis.`);
      }
    } else {
      const wabaVariablesDescription = this.wabaVariablesDescriptionsRepository.create(createWabaVariablesDescriptionDto);
      await this.wabaVariablesDescriptionsRepository.save(wabaVariablesDescription);
      console.log(`Nova variável com ID ${createWabaVariablesDescriptionDto.id} foi criado.`);
    }
  }

  async saveWabaVariablesDescription(createWabaTemplateDto: CreateWabaTemplateDto): Promise<void> {
    const wabaTemplateComponents = createWabaTemplateDto.wabaTemplateComponents;
    if (!wabaTemplateComponents || wabaTemplateComponents.length === 0) {
      console.log('Não há componentes, logo não há variáveis para salvar.');
      return;
    }
    for (const wabaTemplateComponent of wabaTemplateComponents) {
      if(!wabaTemplateComponent.wabaVariablesDescriptions || wabaTemplateComponent.wabaVariablesDescriptions.length === 0) {
        console.log('Não há variáveis de componente para salvar.');
        continue;
      }
      for(const wabaVariablesDescriptions of wabaTemplateComponent.wabaVariablesDescriptions) {
        await this.createWabaVariablesDescription(wabaVariablesDescriptions);
      }
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
