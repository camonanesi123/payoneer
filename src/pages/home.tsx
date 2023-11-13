import React, { useState } from 'react'
import styled from 'styled-components';

const Home = () => {

    const [usdValue, setUsdValue] = useState('');
    const [exchangeRate, setExchangeRate] = useState('');
    const [cnyValue, setCnyValue] = useState('');

    const handleUSDInputChange = async (event: any) => {
        const usd = parseFloat(event.target.value);
        setUsdValue(usd.toString());

        try {
            const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
            const data = await response.json();
            const exchangeRate = parseFloat((0.965 * data.rates.CNY).toFixed(2));
            console.log("rates.data")
            setExchangeRate(exchangeRate.toString());

            const cny = parseFloat((usd * exchangeRate).toFixed(2));
            setCnyValue(cny.toString());
        } catch (error) {
            console.error('Error fetching exchange rate:', error);
        }
    };

    return (
        <Section>
            <div className='container'>
                <div className='content'>
                    <div>
                        <div className='head'>
                            <div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="3em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path></svg></div>
                            <h1>提款到银行</h1>
                            <p className='p1'>取消</p>
                        </div>
                        <div className='main'>
                            <div className='exchange'>
                                <div className='border'>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M12 15c-1.84 0-2-.86-2-1H8c0 .92.66 2.55 3 2.92V18h2v-1.08c2-.34 3-1.63 3-2.92 0-1.12-.52-3-4-3-2 0-2-.63-2-1s.7-1 2-1 1.39.64 1.4 1h2A3 3 0 0 0 13 7.12V6h-2v1.09C9 7.42 8 8.71 8 10c0 1.12.52 3 4 3 2 0 2 .68 2 1s-.62 1-2 1z"></path><path d="M5 2H2v2h2v17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4h2V2H5zm13 18H6V4h12z"></path></svg>
                                    <div className='line'></div>
                                </div>
                                <div>
                                    <p>提款 从 USD balance</p>
                                    <h2>
                                        <input
                                            className='money'
                                            type="number"
                                            min={5}
                                            max={1e6}
                                            value={usdValue}
                                            onChange={handleUSDInputChange}
                                            placeholder='Enter USD'
                                            style={{ fontWeight: 'bold', border: 'none', fontSize: '18px',width: '4em' }}
                                        />USD</h2>
                                </div>

                            </div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2em" width="1.7em" xmlns="http://www.w3.org/2000/svg"><path d="M456 231a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"></path></svg>
                            <div className='exchange'>
                                <div>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.7em" width="1.7em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"></path></svg>
                                </div>
                                <div>
                                    <p>参考汇率*</p>
                                    <h2>1.00 USD =
                                        <input   
                                            className='money'
                                            type="number"
                                            min={10}
                                            max={1e6}
                                            value={exchangeRate}
                                            placeholder='Enter CNY'
                                            style={{
                                                border: 'none',
                                                fontSize: '18px',
                                                lineHeight: '18px', // 设置文本垂直居中
                                                width: '3em'
                                              }}></input>CNY</h2>
                                    <p>包话 Payoneer 转换费</p>
                                </div>
                            </div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2em" width="1.7em" xmlns="http://www.w3.org/2000/svg"><path d="M456 231a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"></path></svg>
                            <div className='exchange'>
                                <div>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M24,104H48v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16H208V104h24a8,8,0,0,0,4.19-14.81l-104-64a8,8,0,0,0-8.38,0l-104,64A8,8,0,0,0,24,104Zm40,0H96v64H64Zm80,0v64H112V104Zm48,64H160V104h32ZM128,41.39,203.74,88H52.26ZM248,208a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H240A8,8,0,0,1,248,208Z"></path></svg>
                                </div>
                                <div>
                                    <p>存款 到 中国银行 （9550）</p>
                                    <h2>
                                        <input className='money' type='number'  style={{ border: 'none', fontSize: '18px',alignItems: 'center'  }} min={10} max={1e6} value={cnyValue} placeholder="Enter CNY"></input>
                                        CNY</h2>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='desc'>
                            <p>描述</p>
                            <div className='sub flex'>
                                <div>
                                    <svg stroke="var(--primary)" fill="var(--primary)" stroke-width="0" viewBox="0 0 32 32" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M 25 4.03125 C 24.234375 4.03125 23.484375 4.328125 22.90625 4.90625 L 13 14.78125 L 12.78125 15 L 12.71875 15.3125 L 12.03125 18.8125 L 11.71875 20.28125 L 13.1875 19.96875 L 16.6875 19.28125 L 17 19.21875 L 17.21875 19 L 27.09375 9.09375 C 28.246094 7.941406 28.246094 6.058594 27.09375 4.90625 C 26.515625 4.328125 25.765625 4.03125 25 4.03125 Z M 25 5.96875 C 25.234375 5.96875 25.464844 6.089844 25.6875 6.3125 C 26.132813 6.757813 26.132813 7.242188 25.6875 7.6875 L 16 17.375 L 14.28125 17.71875 L 14.625 16 L 24.3125 6.3125 C 24.535156 6.089844 24.765625 5.96875 25 5.96875 Z M 4 8 L 4 28 L 24 28 L 24 14.8125 L 22 16.8125 L 22 26 L 6 26 L 6 10 L 15.1875 10 L 17.1875 8 Z"></path></svg>
                                </div>
                                <p className='p1'>添加</p>
                            </div>
                            <div className='sub flex'>
                                <input className='checkbox' type="checkbox" />
                                <p>我确认以上提款， 他将由中华人民共和国许可的服务提供商处理，如果由以下服务商处理，我同意受其服务协议的约束。</p>
                            </div>
                            <div className='sm flex'>
                                <p>-</p>
                                <div>
                                    <p>上海富友支付服务股份有限公司</p>
                                    <p className='p1'>服务协议</p>
                                </div>
                            </div>
                            <div className='sm flex'>
                                <p>-</p>
                                <div>
                                    <p>易联支付服务有限公司</p>
                                    <p className='p1'>服务协议</p>
                                </div>
                            </div>
                            <div className='sm flex'>
                                <p>-</p>
                                <div>
                                    <p>中国工商银行股份有限公司</p>
                                    <p className='p1'>服务协议</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='footer'>
                            <div>
                                <p>存款金额可能会由银行或第三方服务机构收取费用，点击“提款”，表示你确认上方的提款详情</p>
                            </div>
                            <button className='btn'>提款</button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

const Section = styled.section`
    .container {
        .content {
            padding: 1em;
            border: 1px  solid var(--around);
            .head {
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 4px solid var(--primary);
            }
            .main {
                padding-top: 1em;
                .exchange {
                    display: flex;
                    gap: 1.5em;
                    align-items: center;
                    .money {
                        width: 7em;
                        margin: 5px 5px 5px 0px;
                        height: 1em;
                    }
                    
                }
                .line {
                    width: 1px;
                    background: black;
                }

            }
            .desc {
                padding-top: 0.3em;
                p {
                    font-size: 0.65em; /* 设置较小的字体大小，可以根据需要调整值 */
                }
                .checkbox {
                    width: 20px;
                    height: 20px;
                    background-color: var(--primary) !important;
                }
                .sub {
                    margin-top: 0.6em;
                }
                .sm {
                    margin: 1em 0em 1em 2em;
                }
            }
            .footer {
                p {
                    font-size: 0.65em; /* 设置较小的字体大小，可以根据需要调整值 */
                }
                text-align: center;
                height: 8em;
                display: flex;
                flex-wrap: wrap;
                align-content: flex-end;
                .btn {
                    width: 100%;
                    background-color: var(--primary);
                    padding: 10px;
                    border: none;
                    border-radius: 7px;
                    color: var(--color-bg);
                    font-size: 16px;
                    letter-spacing: 1px;
                    margin: 1em 0em 0em;
                    cursor: pointer;
                    &:hover {
                        border: 1px solid var(--primary);
                        background-color: transparent;
                        color: var(--primary);
                        transition: 0.5s;
                    }
                }
            }
        }
    }
`
export default Home;