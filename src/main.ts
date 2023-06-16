import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as os from 'node:os';
import cluster from 'node:cluster';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

const numCPUs = os.cpus();

if(cluster.isPrimary){
  for(const cpu of numCPUs){  
      cluster.fork();
  }
} else {
  bootstrap();
}