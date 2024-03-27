import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export async function fetchProducts(variantId, sku) {
    try {
        const product1 = await prisma.ProductVariant.findUnique({
            where: { sku: sku, id1: variantId.toString() },
        });
        if (product1) {
            return product1;
        }
        const product2 = await prisma.ProductVariant.findUnique({
            where: { sku: sku, id2: variantId.toString() },
        });
        if (product2) {
            return product2;
        }
        throw new Error('Product not found');
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error; 
    }
}