fetch('https://stonkch.art/api2api/https%3A%2F%2Fquery1.finance.yahoo.com%2Fv10%2Ffinance%2FquoteSummary%2FUSDCAD%3DX%3Fmodules%3DsummaryProfile%2Cprice%2CdefaultKeyStatistics%2CfinancialData')
    .then(res => res.json())
    .then(data => {
        if (data.quoteSummary.error === null && data.quoteSummary.result[0].price.regularMarketPrice.raw) {
            const renderItems=(selector,offset,type)=> {
                let item;
                switch (type) {
                    case 1:
                        item = document.querySelector(selector);
                        if (item && item.textContent.indexOf('$') !== offset && item.textContent.indexOf('$)') === -1 && Number(item.textContent.slice(1).replace(/[^0-9.-]+/g, ""))!== 0) {
                            item.style.fontSize = '16px';
                            item.textContent = item.textContent + ` (${(Number(item.textContent.slice(1).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                        }
                        break;
                    case 2:
                        item = document.querySelector(selector);
                        if (item && item.textContent.indexOf('$') === offset && item.textContent.indexOf('$)') === -1 && Number(item.textContent.slice(1).replace(/[^0-9.-]+/g, ""))!== 0) {
                            item.style.fontSize = '16px';
                            item.textContent = item.textContent + ` (${(Number(item.textContent.slice(1).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                        }
                        break;
                    default:
                }
                
            };
            const runCode=()=> { ``
                if (document.querySelector('div.col-md-4:nth-child(1)') && document.querySelector(`span.stylePrice:nth-child(4)`)) {
                    renderItems(`span.stylePrice:nth-child(4)`,0,2);
                } 
                if (document.querySelector(`li.itemAddToCart:nth-child(4) > form:nth-child(1) > div:nth-child(12) > span:nth-child(1)`)) {
                    renderItems(`li.itemAddToCart:nth-child(4) > form:nth-child(1) > div:nth-child(12) > span:nth-child(1)`,0,1);
                }
                if (document.querySelector(`li.itemAddToCart:nth-child(3) > form:nth-child(1) > div:nth-child(12) > span:nth-child(1)`)) {
                    renderItems(`li.itemAddToCart:nth-child(3) > form:nth-child(1) > div:nth-child(12) > span:nth-child(1)`,0,1);
                }
                if (document.querySelector(`li.itemAddToCart:nth-child(2) > form:nth-child(1) > div:nth-child(12) > span:nth-child(1)`)) {
                    renderItems(`li.itemAddToCart:nth-child(2) > form:nth-child(1) > div:nth-child(12) > span:nth-child(1)`,0,1);
                }
                if (document.querySelector(`li.itemAddToCart:nth-child(1) > form:nth-child(1) > div:nth-child(12) > span:nth-child(1)`)) {
                    renderItems(`li.itemAddToCart:nth-child(1) > form:nth-child(1) > div:nth-child(12) > span:nth-child(1)`,0,1);
                }
                if (document.querySelector(`li.itemAddToCart:nth-child(1) > form:nth-child(1) > div:nth-child(12) > span:nth-child(4)`)) {
                    renderItems(`li.itemAddToCart:nth-child(1) > form:nth-child(1) > div:nth-child(12) > span:nth-child(4)`,1,2);

                }
                if (document.querySelector(`.col-sm-9`) && document.querySelector(`div.productItemWrapper:nth-child(1)`)) {
                    let laTable = document.querySelector(`.col-sm-9`);
                    if (laTable) { 
                        for (let i = 1; i <= laTable.children.length; i++) {
                            let laCard = document.querySelector(`div.productItemWrapper:nth-child(${i}) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > form:nth-child(1) > div:nth-child(12) > span:nth-child(4)`);
                            if (laCard && laCard.textContent.indexOf('$') === 1 && laCard.textContent.indexOf('$)') === -1 && Number(laCard.textContent.slice(1).replace(/[^0-9.-]+/g, ""))!== 0) {
                                laCard.style.fontSize = '16px';
                                laCard.textContent = laCard.textContent + ` (${(Number(laCard.textContent.slice(1).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                            }
                            if (document.querySelector(`div.productItemWrapper:nth-child(${i}) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > form:nth-child(1) > div:nth-child(12) > span:nth-child(1)`)) {
                                let laCardEX = document.querySelector(`div.productItemWrapper:nth-child(${i}) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > form:nth-child(1) > div:nth-child(12) > span:nth-child(1)`);
                                if (laCardEX && laCardEX.textContent.indexOf('$') === 1 && laCardEX.textContent.indexOf('$)') === -1 && Number(laCardEX.textContent.slice(1).replace(/[^0-9.-]+/g, ""))!== 0) {
                                    laCardEX.style.fontSize = '16px';
                                    laCardEX.textContent = laCardEX.textContent + ` (${(Number(laCardEX.textContent.slice(1).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                                }
                            }
                            if (document.querySelector(`div.productItemWrapper:nth-child(${i}) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(3) > form:nth-child(1) > div:nth-child(12) > span:nth-child(1)`)) {
                                let laCardVG = document.querySelector(`div.productItemWrapper:nth-child(${i}) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(3) > form:nth-child(1) > div:nth-child(12) > span:nth-child(1)`);
                                if (laCardVG && laCardVG.textContent.indexOf('$') === 1 && laCardVG.textContent.indexOf('$)') === -1 && Number(laCardVG.textContent.slice(1).replace(/[^0-9.-]+/g, ""))!== 0) {
                                    laCardVG.style.fontSize = '16px';
                                    laCardVG.textContent = laCardVG.textContent + ` (${(Number(laCardVG.textContent.slice(1).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                                }
                            }
                            if (document.querySelector(`div.productItemWrapper:nth-child(${i}) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(4) > form:nth-child(1) > div:nth-child(12) > span:nth-child(1)`)) {
                                let laCardG = document.querySelector(`div.productItemWrapper:nth-child(${i}) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(4) > form:nth-child(1) > div:nth-child(12) > span:nth-child(1)`);
                                if (laCardG && laCardG.textContent.indexOf('$') === 1  && laCardG.textContent.indexOf('$)') === -1 && Number(laCardG.textContent.slice(1).replace(/[^0-9.-]+/g, ""))!== 0) {
                                    laCardG.style.fontSize = '16px';
                                    laCardG.textContent = laCardG.textContent + ` (${(Number(laCardG.textContent.slice(1).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                                }
                            } 
                            if (document.querySelector(`div.productItemWrapper:nth-child(${i}) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > form:nth-child(1) > div:nth-child(12) > span:nth-child(1)`)) {
                                let laCardException = document.querySelector(`div.productItemWrapper:nth-child(${i}) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > form:nth-child(1) > div:nth-child(12) > span:nth-child(1)`);
                                if (laCardException && laCardException.textContent.indexOf('$') === 1 && laCardException.textContent.indexOf('$)') === -1 && Number(laCardException.textContent.slice(1).replace(/[^0-9.-]+/g, ""))!== 0) {
                                    laCardException.style.fontSize = '16px';
                                    laCardException.textContent = laCardException.textContent + ` (${(Number(laCardException.textContent.slice(1).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                                }
                            }
                        }
                    }
                }
            };
            setInterval(() => {
                runCode()
            }, 1500);
        }
    });
