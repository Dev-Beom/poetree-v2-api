import { DocumentBuilder } from "@nestjs/swagger";

export const SwaggerConfig = new DocumentBuilder()
  .setTitle("Poetree-api-documents")
  .setDescription("Poetree API")
  .setVersion("1.0")
  .addTag("poetree")
  .addBearerAuth({
    type: "http",
    scheme: "bearer",
    bearerFormat: "JWT",
    name: "JWT",
    description: "Enter JWT token",
    in: "header"
  })
  .build();