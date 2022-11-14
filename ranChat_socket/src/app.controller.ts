import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return {
      data: {
        title: 'Chatting',
        copyright: 'jaehyeon Park',
      },
    };
  }
}
