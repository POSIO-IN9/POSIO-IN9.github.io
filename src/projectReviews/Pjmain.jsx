import React, { useRef, useEffect } from 'react';
import ScrollLine from '../components/scrollLine/ScrollLine';
import "./Pjmain.scss";
import CodeBlock from '../components/codeblock/Codeblock';
import { Data } from "./Pj";
import { code01, code03, code04, code05,code06 } from './Code/Code';
import Header from './pjheader/Header';
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import ScrollToTopButton from "../containers/topbutton/Top";
import {Slide} from "react-reveal";

export default function Pjmain() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const section = useRef([]);

  const addRef = (el) => {
    if (el && !section.current.includes(el)) {
      section.current.push(el);
    }
  };

  useEffect(() => {
    const options = {
      threshold: 0.5, 
    };

    const currentSections = section.current;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target); 
        }
      });
    }, options);

    currentSections.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      currentSections.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
      <>
        <ScrollLine />
        <Header section={section} />
        <div className={isDark ? "dark-mode" : null}>
          <div className="pj">
            <div className="pjhead">
              <h3>우리의 프로젝트를 소개 합니다</h3>
            </div>
            <Slide bottom duration={1000}>
              <div ref={addRef} className="pjsection">
                <div className="pjtitle">
                  <h3>{Data[0].title}</h3>
                  <div className="pjborder"></div>
                </div>
                <div className="pjcontent">
                  <p className='pjsubtitle'>{Data[0].subtitle1}</p>
                  <p className='pjcontent'>{Data[0].content}</p>
                  <p className='pjsubtitle'>{Data[0].subtitle2}</p>
                  {Data[0].list && (
                    <ul>
                      {Data[0].list.map((item, idx) => (
                        <li key={idx} className="pjlist">
                          <strong>{item.title}</strong>
                          <p style={{ margin: "5px 0 0 0" }}>{item.content}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Slide>
            <Slide bottom duration={1000}>
            <div ref={addRef} className="pjsection">
              <div className="pjtitle">
                <h3>{Data[1].title}</h3>
                  <div className="pjborder"></div>
              </div>
              <div className="pjcontent">
                <p className='pjsubtitle'>{Data[1].subtitle1}</p>
                <p>{Data[1].content}</p>
                <p className='pjsubtitle'>{Data[1].subtitle2}</p>
                <p>{Data[1].content2}</p>
                {Data[1].list1 && (
                    <ul>
                      {Data[1].list1.map((item, idx) => (
                        <li key={idx} className="pjlist">
                          <strong>{item.title}</strong>
                          <p style={{ margin: "5px 0 0 0" }}>{item.content}</p>
                          {idx === 1 && (
                            <div className="pjcodeblock">
                              <p className="codetitle">{code01.title}</p>
                              <CodeBlock lang={code01.lang} code={code01.string} />
                            </div>
                          )}
                         
                        </li>
                      ))}
                    </ul>
                )}
                <p className='pjsubtitle'>{Data[1].subtitle3}</p>
                <p>{Data[1].content3}</p>
                {Data[1].list2 && (
                    <ul>
                      {Data[1].list2.map((item, idx) => (
                        <li key={idx} className="pjlist">
                          <strong>{item.title}</strong>
                          <p style={{ margin: "5px 0 0 0" }}>{item.content}</p>
                          {idx === 1 && (
                            <div className="pjcodeblock">
                              <p className="codetitle">{code03.title}</p>
                              <CodeBlock lang={code03.lang} code={code03.string} />
                            </div>
                          )}
                          {idx === 2 && (
                            <div className="pjcodeblock">
                              <p className="codetitle">{code04.title}</p>
                              <CodeBlock lang={code04.lang} code={code04.string} />
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

              </div>
            </div>
            </Slide>
            <Slide bottom duration={1000}>
            <div ref={addRef} className="pjsection">
              <div className="pjtitle">
                <h3>{Data[2].title}</h3>
                  <div className="pjborder"></div>
              </div>
              <div className="pjcontent">
              <p className='pjsubtitle'>{Data[2].subtitle1}</p>
              <p>{Data[2].content1}</p>
              {Data[2].list && (
                    <ul>
                      {Data[2].list.map((item, idx) => (
                        <li key={idx} className="pjlist">
                          <strong>{item.title}</strong>
                          <p style={{ margin: "5px 0 0 0" }}>{item.content}</p>
                          {idx === 0 && (
                            <div className="pjcodeblock">
                              <p className="codetitle">{code05.title}</p>
                              <CodeBlock lang={code05.lang} code={code05.string} />
                            </div>
                          )}
                          {idx === 1 && (
                            <div className="pjcodeblock">
                              <p className="codetitle">{code06.title}</p>
                              <CodeBlock lang={code06.lang} code={code06.string} />
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

              
              </div>
            </div>
            </Slide>
            <Slide bottom duration={1000}>
            <div ref={addRef} className="pjsection">
              <div className="pjtitle">
                <h3>{Data[3].title}</h3>
                  <div className="pjborder"></div>
              </div>
              <div className="pjcontent">
                <p className='pjsubtitle'>{Data[3].subtitle1}</p>
                <p>{Data[3].content}</p>
                <p className='pjsubtitle'>{Data[3].subtitle2}</p>
                <p>{Data[3].content2}</p>
              </div>
            </div>
            </Slide>
            <div className="pjfoot">
              <h3>긴 글 읽어주셔서 감사합니다</h3>
              <h4>앞으로 더 멋진 프로젝트를 함께 하겠습니다</h4>
            </div>
          </div>
        </div>
        <ScrollToTopButton />
      </>
    </StyleProvider>
  );
}
