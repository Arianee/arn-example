import {ArnClient} from "@arianee/arn-client"
declare const arnClient: ArnClient;

interface MyTranslation {
  welcome: string
}

export class TranslationExample {
  protected translations?: MyTranslation

  constructor(protected anchor: Element) {
  }

  async getTranslations(): Promise<any> {
    if (!this.translations) {
      try {
        this.translations = await arnClient.i18n.get<MyTranslation>()
      } catch (e) {
        console.warn('No translations available for this project')
      }
    }
    return this.translations!;
  }

  async render() {
    const translations = await this.getTranslations();
    this.anchor.innerHTML = `
<details>
  <summary>Internationalization</summary>` + (translations ?
  `<p>This is a very simple example of using the <a href="https://www.notion.so/arianee/ARN-Client-Internationalization-API-9a11090251654f81b06c3345d2e55161">ARN i18n API</a>.</p>
  <p>Here is a message translated in your language: <i>${translations.welcome}</i></p>`
      : '<p>No translations available on this project.</p>') + `
</details>`
  }
}
