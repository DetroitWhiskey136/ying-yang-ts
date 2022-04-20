import "dotenv/config";

import * as Sentry from "@sentry/node";

import { API, Core } from "./index";

// Sentry Related Stuff
Sentry.init({
  attachStacktrace: true,
  dsn: process.env.SENTRY_DSN,
  environment: "development",
  integrations: [new Sentry.Integrations.Http({ tracing: true })],
  release: `${process.env.npm_package_name}@${process.env.npm_package_version}`,
  tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
  name: "My Transaction",
  op: "transaction",
});

Sentry.configureScope((scope) => {
  scope.setSpan(transaction);
});

// API Related Stuff
/* const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
const routes: Array<API.CommonRoutesConfig> = [];

app.use(express.json());
app.use(cors);
routes.push(new API.UserRoutes(app));
const runningMessage = `Server running at http://localhost:${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send(runningMessage);
}); */

// Bot Related Stuff
const bot = new Core.Client.BotClient(Core.Util.Constants.clientOptions);

/* server.listen(port, () => {
  routes.forEach((route: API.CommonRoutesConfig) => {
    bot.logger.debug(`Routes configured for ${route.getName()}`);
  });
  bot.logger.info(runningMessage);
}); */

// API.init(bot);

if (process.env.NODE_ENV !== "production") bot.dev();
bot.init(String(process.env.TOKEN), Sentry);
