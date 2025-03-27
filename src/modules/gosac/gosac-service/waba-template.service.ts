import { Injectable } from '@nestjs/common';

@Injectable()
export class WabaTemplateService {

    token = '1f7e1c970adf60b4ac6dc56afbc4edcd3ed52de8656fb38f7e899bff6889';
    url_waba_template = 'https://cmmodulados.gosac.com.br/api/wabatemplate';
    
    async startChatbot(): Promise<any> {
      const templates = await this.fetchWabaTemplate();
      console.log(templates[0]);
    }

    async fetchWabaTemplate(): Promise<any> {
        try {
          const response = await fetch(this.url_waba_template, {
            method: 'GET',
            headers: {
              Authorization: `INTEGRATION ${this.token}`,
            },
          });
    
          if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
          }
    
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Erro ao buscar usuários:', error.message);
          throw error;
        }
      }
}
