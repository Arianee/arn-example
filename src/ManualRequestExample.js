export class ManualRequestExample {

  constructor(anchor, projectUrl, contractAdress, minBalance = 1, chainId = 1) {
    this.chainId = chainId
    this.minBalance = minBalance
    this.contractAdress = contractAdress
    this.anchor = anchor
    this.projectUrl = projectUrl

    this.authHeader = ""
    // Listen to auth status to refresh wallet address
    const auth = arnClient.auth
    auth.currentContext$.subscribe(async (authContext) => {
      authContext?.status$.subscribe((status) => {
        switch (status?.connectionStatus) {
          case "authenticated":
            this.authHeader = auth.generateAuthorizationHeader(authContext)
            break
          case "disconnected":
            this.authHeader = ""
            break
        }
        this.render()
      })
    })
  }

  render() {
    const payload = {
      and: [
        {
          opts: {
            chainId: this.chainId,
            contractAddress: this.contractAdress,
            minBalance: this.minBalance,
            templateName: "HasERC721"
          }
        }]
    }
    const url = this.projectUrl + "/nft/list/"
    const headers = {
      Authorization: this.authHeader,
      "Content-Type": "application/json; charset=utf-8"
    }
    let headersStr = ""
    for (const header in headers
      ) {
      headersStr += header + ": " + headers[header] + "\n"
    }

    const body = JSON.stringify(payload)
    const requestInit = {method: "POST", headers, body}
    if (this.authHeader) {
      fetch(url, requestInit).then(response => {
        if (response.ok) {
          response.json().then(json => {
            this.display(url, headersStr, body, JSON.stringify(json))
          })
        } else {
          this.display(url, headersStr, body, response.statusText)
        }
      })
    } else {
      this.display(url, headersStr, body, "Please connect first")
    }
  }

  display(url, headersStr, body, response) {
    this.anchor.innerHTML = `
<section>
  <h2>Manual request</h2>
  <p>This is an example of sending an HTTP request to the ARN server manually:</p>
  <arn-if-connected>
    <p slot="if-false">Please connect first</p>
    <div slot="if-true"><p>Sent:</p>
      <pre><code>POST ${url}
${headersStr}
${body}</code></pre>
<p>Response: ${response}</p>
    </div>
  </arn-if-connected>
</section>`
  }
}
