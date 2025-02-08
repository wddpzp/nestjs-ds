import { Controller, Get, Res } from '@nestjs/common';
import { DsService } from './ds.service';
import { Response } from 'express';

@Controller('ds')
export class DsController {
  constructor(private readonly dsService: DsService) { }

  @Get()
  getHello(): string {
    return 'ds';
  }

  @Get('answer')
  async getAnswer(@Res({ passthrough: false }) response: Response) {
    console.log('getAnswer');
    response.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
    response.setHeader('Cache-Control', 'no-cache');
    response.setHeader('Connection', 'keep-alive');

    const stream = await this.dsService.getAnswer('');

    try {
      for await (const chunk of stream) {
        response.write(`${chunk.choices[0].delta.content}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      response.end();
    }
  }
}
