import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import * as fs from 'fs';

@Injectable()
export class GoogleDriverService {
  // private driveClient;

  // constructor() {
  //   this.authenticate();
  // }

  // private authenticate() {
  //   const credentials = JSON.parse(fs.readFileSync('cmm-driver-ebd38f90990a.json', 'utf8'));

  //   const auth = new google.auth.GoogleAuth({
  //     credentials,
  //     scopes: ['https://www.googleapis.com/auth/drive'],
  //   });

  //   this.driveClient = google.drive({ version: 'v3', auth });
  // }

  // async createFolder(folderName: string, parentFolderId?: string) {
  //   try {
  //     const fileMetadata = {
  //       name: folderName,
  //       mimeType: 'application/vnd.google-apps.folder',
  //       ...(parentFolderId && { parents: [parentFolderId] }),
  //     };

  //     const folder = await this.driveClient.files.create({
  //       resource: fileMetadata,
  //       fields: 'id',
  //     });

  //     return folder.data.id;
  //   } catch (error) {
  //     console.error('Erro ao criar pasta:', error);
  //     throw error;
  //   }
  // }
}
