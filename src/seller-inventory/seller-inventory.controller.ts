import { SellerInventoryService } from './seller-inventory.service';
import { SellerInventory } from './entities/seller-inventory.entity';
import { CreateSellerInventoryInput } from './dto/create-seller-inventory.input';
import { UpdateSellerInventoryInput } from './dto/update-seller-inventory.input';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('seller-inventory')
@ApiTags('Seller Inventory')
export class SellerInventoryController {
  constructor(
    private readonly sellerInventoryService: SellerInventoryService,
  ) { }

  @ApiOperation({ summary: 'This endpoint will create a seller inventory' })
  @Post()
  async createSellerInventory(
    @Body() createSellerInventoryInput: CreateSellerInventoryInput,
  ): Promise<SellerInventory> {
    return this.sellerInventoryService.createSellerInventory(
      createSellerInventoryInput,
    );
  }

  @ApiOperation({ summary: 'This endpoint to get all seller inventories' })
  @Get('')
  async getAllSellerInventories(): Promise<SellerInventory[]> {
    return this.sellerInventoryService.findAllSellerInventories();
  }

  @ApiOperation({
    summary: 'This endpoint to get seller inventory details by id',
  })
  @Get('/:id')
  async getSellerInventory(@Param('id') id: string): Promise<SellerInventory> {
    return this.sellerInventoryService.findOne(id);
  }

  @ApiOperation({ summary: 'This endpoint to update seller inventory details' })
  @Put('')
  async updateSellerInventory(
    @Body() updateSellerInventoryInput: UpdateSellerInventoryInput,
  ): Promise<SellerInventory> {
    return this.sellerInventoryService.updateSellerInventory(
      updateSellerInventoryInput.id,
      updateSellerInventoryInput,
    );
  }

  @ApiOperation({ summary: 'This endpoint to delete seller inventory' })
  @Delete('/:id')
  async removeSellerInventory(
    @Param('id') id: string,
  ): Promise<SellerInventory> {
    return this.sellerInventoryService.removeSellerInventory(id);
  }
}
