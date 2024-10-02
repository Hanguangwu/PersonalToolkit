function getDomainAndTitle(urlInput) {
    // 移除输入中的"http://", "https://", 和末尾的"/"
    let sanitizedUrl = urlInput.replace(/^https?:\/\//, '').replace(/\/$/, '');
  
    // 提取域名部分
    const domain = sanitizedUrl;
  
    // 提取网站名称(去掉顶级域名)
    const title = domain.split('.')[0];
  
    return { domain, title };
  }
  
  function generateIconBox() {  
    const urlInput = document.getElementById('urlInput').value.trim();  
    const outputDiv = document.getElementById('output');  
  
    if (!urlInput) {  
        alert('请输入一个网址');  
        return;  
    }  
  
    // 获取域名和标题
    const { domain, title } = getDomainAndTitle(urlInput);
    const faviconUrl = `https://favicon.im/${domain}`;  
  
    const template = `  
        <div class="icon-box">  
  
           <img src="${faviconUrl}" alt="${domain} favicon" />  
  
            <a href="https://${domain}/" target="_blank">${title}</a>  
  
            <p>${title}</p>  
  
        </div>  
    `;  
  
    outputDiv.innerText = template;  
  }
  