import {ArnClient} from "@arianee/arn-client"
declare const arnClient: ArnClient;

export class TranslationExample {
  protected translations?: Promise<any>

  constructor(protected anchor: Element) {
  }

  async getTranslations(): Promise<any> {
    if (!this.translations) {
      this.translations = await arnClient.i18n.get(navigator.language)
    }
    return this.translations!;
  }

  async render() {
    const translations = await this.getTranslations();
    this.anchor.innerHTML = `
<section>
  <h2>Internationalization</h2>
  <p>This is a very simple example of using the <a href="https://www.notion.so/arianee/ARN-Client-Internationalization-API-9a11090251654f81b06c3345d2e55161">ARN i18n API</a>.</p>
  <p>Here is a message translated in your language: <i>${translations.welcome}</i></p>
</section>`
  }
}
