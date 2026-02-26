import { Elysia } from "elysia";
import { app as authApp } from "./modules/auth";

const app = new Elysia().use(authApp).listen(3000);

console.log(`Server running on ${app.server?.hostname}:${app.server?.port}`);