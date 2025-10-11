// export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT);

import { z } from "zod";

// const ageSchema = z.number().min(18).max(30).int();
// const userAge = 17;
// const parseUserAge = ageSchema.parse(userAge);
// console.log(parseUserAge);

const portSchema = z.coerce.number().min(1).max(65535).default(3001);
export const PORT = portSchema.parse(process.env.PORT);
