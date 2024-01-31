import * as request from 'supertest'
import { Test, TestingModule } from '@nestjs/testing'
import { AuthController } from '../auth.controller'
import { HttpModule } from '@nestjs/axios'
import { AuthService } from '../auth.service'

describe('AuthController', () => {
  let controller: AuthController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [AuthService],
      controllers: [AuthController],
    }).compile()

    controller = module.get<AuthController>(AuthController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
