import { Test, TestingModule } from '@nestjs/testing';
import { SellerInventoryService } from './seller-inventory.service';

describe('SellerInventoryService', () => {
  let service: SellerInventoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellerInventoryService],
    }).compile();

    service = module.get<SellerInventoryService>(SellerInventoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
