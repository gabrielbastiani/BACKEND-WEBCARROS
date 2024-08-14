-- CreateTable
CREATE TABLE "cars" (
    "id" TEXT NOT NULL,
    "image_car" JSONB NOT NULL,
    "name" VARCHAR(500) NOT NULL,
    "model_car" VARCHAR(500) NOT NULL,
    "year_car" VARCHAR(50) NOT NULL,
    "km_car" VARCHAR(70) NOT NULL,
    "whatsapp" VARCHAR(50) NOT NULL,
    "city" VARCHAR(200) NOT NULL,
    "price_car" VARCHAR(50) NOT NULL,
    "description_car" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);
