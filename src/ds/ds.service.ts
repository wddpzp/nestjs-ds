import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class DsService {
  private openai: OpenAI;
  constructor() {
    console.log('ds service111');
    const openai = new OpenAI({
      baseURL: 'https://api.deepseek.com',
      apiKey: 'sk-d1dba1bd3c9848189c1ce8cbe10d0739',
    });
    this.openai = openai;
  }

  async getAnswer(question: string) {
    const stream = await this.openai.chat.completions.create({
      messages: [
        { role: 'system', content: question || 'You are a helpful assistant.' },
      ],
      model: 'deepseek-chat',
      stream: true,
    });

    return stream;
  }
}
