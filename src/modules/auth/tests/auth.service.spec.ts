import { Test, TestingModule } from '@nestjs/testing'
import { AuthService } from '../auth.service'
import { UnauthorizedException } from '@nestjs/common'

describe('AuthService', () => {
  let loginService: AuthService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile()

    loginService = module.get<AuthService>(AuthService)
  })

  it('should be defined', () => {
    expect(loginService).toBeDefined()
  })

  it('should throw Unauthorized', async () => {
    const payload = {
      username: 'teste',
      password: 'teste',
    }

    await expect(loginService.signIn(payload)).rejects.toThrow(
      UnauthorizedException,
    )
  })
})
