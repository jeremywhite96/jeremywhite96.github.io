import { left, up } from "inquirer/lib/utils/readline";
import React                       from "react";
import TextTransition, { presets } from "react-text-transition";
import siteMetadata from '@/data/siteMetadata'

const TEXTS = [
    "Hello",
    "Bonjour",
    "Guten Tag",
    "你好",
    "Ciao",
    "Hej",
    "こんにちは",
    "Salut",
    "Olá",
    "Hei",
    "안녕",
    "Helo",
    "Ahlan",
    "Доброго дня",
    "Hola",
    "Witam",
    "Γεια σας",
    "Hallo",
    "Merhaba"

  ];
  
  const Rotatehead = () => {
    const [index, setIndex] = React.useState(0);
  
    React.useEffect(() => {
      const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        3000
      );
      return () => clearTimeout(intervalId);
    }, []);
  
    return (
        <div className="flex flex-col my-0 md:my-12 ease-out duration-300">
            <div className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                <TextTransition springConfig={presets.wobbly} inline={true}>
                {TEXTS[index % TEXTS.length]}
                </TextTransition> 
            <span>, I'm Jeremy</span>
        </div>
        <div className="text-l md:text-xl font-light mt-4">
          Welcome to my personal website.
        {/* {siteMetadata.description} */}
        {/* Automatic description snippet */}
        </div>
      </div>
    );
  };

export default Rotatehead