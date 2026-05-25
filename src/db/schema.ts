

import { integer, pgTable, varchar ,boolean, uuid,text,timestamp} from "drizzle-orm/pg-core";

export const userTable = pgTable('users',{
    id:uuid('id').primaryKey().defaultRandom(),
    fname:varchar('first_name',{length:45}).notNull(),
    lname:varchar('last_name',{length:50}),

    email:varchar('email',{length:232}).notNull().unique(),
    password:varchar('password',{length:66}),
    salt:text('salt'),

    createdAt:timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp("updated_at").$onUpdate(() => new Date())
})

