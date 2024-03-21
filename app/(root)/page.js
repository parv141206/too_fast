"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../(root)/layout"; // Use curly braces for named import
import News from "./(components)/News";
import OurAPI from "./(components)/OurAPI";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const textRef = useRef(null); // Create a ref to hold the reference to the text element
  const tooFastRef = useRef(null);
  const [tooFastText, setTooFastText] = useState([
    "with news",
    "in trends",
    "in sports",
    "in politics",
    "in business",
    "in entertainment",
    "in education",
    "in science",
    "in health",
    "in technology",
    "in travel",
  ]);
  useEffect(() => {
    const shuffleText = () => {
      if (textRef.current) {
        const text = textRef.current.textContent;
        const shuffledText = text
          .split("")
          .sort(() => 0.5 - Math.random())
          .join("");
        textRef.current.textContent = shuffledText;
      }
    };
    const swapTooFastText = () => {
      if (tooFastRef.current) {
        tooFastRef.current.textContent =
          tooFastText[Math.floor(Math.random() * tooFastText.length)];
      }
    };
    const intervalId = setInterval(shuffleText, 500);
    const swapTooFastTextId = setInterval(swapTooFastText, 1000);
    return () => {
      clearInterval(intervalId);
      clearInterval(swapTooFastTextId);
    };
  }, [tooFastText]);
  return (
    <main>
      <header>
        <div
          ref={textRef}
          className={`absolute -z-10 text-justify  ${theme === "Dark" ? "text-slate-900" : "text-slate-200"}`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero
          consequuntur natus. Nihil id odio, saepe repellat perspiciatis eum
          labore debitis, aut eaque pariatur amet iure maiores velit doloremque
          nesciunt rem animi doloribus non magnam a reprehenderit delectus?
          Voluptatibus cupiditate similique esse reprehenderit ratione nihil
          quia, nesciunt obcaecati modi quaerat voluptates placeat rerum iste
          alias dolorem dolorum, eligendi aut? Quisquam quo suscipit minus
          repudiandae, explicabo, nam tempora enim rem nesciunt debitis facere
          quidem voluptatem assumenda fuga. Unde repellat, vitae, hic tempore
          sequi explicabo velit est voluptatem ullam molestiae perferendis atque
          dolores temporibus tenetur? Beatae ipsum, reiciendis pariatur illum a
          nemo rerum iste reprehenderit. Repudiandae aut incidunt nobis modi
          sit, laborum doloribus maiores, excepturi iusto aliquid
          exercitationem! Dignissimos vitae ratione, ut laboriosam labore
          expedita cum tempora inventore autem quos incidunt ipsam dolores
          tempore distinctio reprehenderit dolorum nesciunt illum. Velit optio
          maiores omnis molestias qui eos voluptatum pariatur dolore architecto,
          a repudiandae similique. Itaque officia ex doloribus repudiandae
          minima repellat? Nostrum sapiente tempore reprehenderit nulla dolores?
          Delectus quia tempora quidem nostrum facere quas obcaecati eius
          assumenda rerum vitae? Mollitia praesentium, deserunt ipsum nisi
          eligendi quo tempora saepe natus explicabo fugiat, necessitatibus
          doloribus harum sit porro distinctio neque odio adipisci doloremque
          voluptas minus aspernatur molestias sed. Accusantium quas beatae
          corporis voluptates officia voluptatibus commodi ipsa. Voluptates
          quibusdam unde voluptas voluptatem vero obcaecati! Modi illum amet
          exercitationem recusandae voluptatem omnis repellat, voluptate eius in
          nobis, porro incidunt enim quam tenetur vel facilis placeat iure
          provident fugiat sapiente nemo. Fugit facilis beatae autem odit iste
          ut, reprehenderit non eaque illo, ipsum ipsa voluptates ipsam optio
          totam fugiat a, dicta quae odio aliquid assumenda sequi quos inventore
          nam. Tenetur nobis dolores vitae soluta sint. Ut, numquam, eum harum
          animi officia non earum rem doloremque expedita inventore aperiam
          esse. Enim vero odio, accusantium commodi exercitationem mollitia
          corrupti, ab dolorum quae ullam aliquam temporibus maxime omnis facere
          rem. Quos nobis explicabo autem nostrum! Quibusdam omnis eligendi
          veritatis magni deserunt quia aliquam dolorem, cumque voluptatem atque
          ut, natus, temporibus tempora reprehenderit. Voluptatum soluta
          voluptas eaque esse aliquam assumenda laboriosam totam dolores a modi
          repudiandae ad obcaecati aspernatur, mollitia optio. Provident, quae.
          Sapiente ipsa molestias assumenda asperiores? Reprehenderit nisi
          laborum iste excepturi voluptatem eum ea soluta, suscipit ullam,
          laudantium quidem optio nihil distinctio maiores? Iste asperiores eos
          vitae officia quas unde eaque facere enim libero tempore. Voluptates
          illum beatae cumque quae quia voluptatibus a fugiat aspernatur
          cupiditate eos, ipsum quaerat? Tempore ad neque cupiditate sed
          similique nemo ea deleniti accusantium temporibus atque dignissimos
          vero quae impedit et, fugit, beatae, officia obcaecati natus placeat
          unde at ducimus repellat. Atque mollitia quo optio aspernatur
          obcaecati eum natus, qui quidem corrupti ipsam dignissimos
          necessitatibus ut quod placeat consectetur repudiandae, dolor esse
          laboriosam sit dolorum! Reiciendis aliquid nihil expedita pariatur eum
          qui et numquam temporibus voluptas, error optio hic quidem explicabo
          minima ullam iste, facere officiis dolore maxime. Eveniet, animi minus
          consequatur libero minima odit, reprehenderit sint voluptatibus quae
          consequuntur eligendi eius eos harum vitae quasi quod illo dolor
          aliquid optio culpa, corrupti magni. Culpa hic eius est! Velit
          deleniti accusamus laborum magni hic earum excepturi soluta unde
          fugiat in. Temporibus nisi cupiditate laborum ratione possimus
          recusandae molestiae dolorem voluptatum! Quos est officia omnis ab
          repellat in, corrupti facere natus nulla dicta ducimus quas nisi odio
          itaque culpa. Quibusdam quos molestiae nobis amet expedita eius quod
          ducimus sunt nostrum libero facilis doloremque dolor, fugit aut nihil
          quaerat consequuntur. Quae, repellat neque. Laboriosam animi dolorem
          iusto cumque iure neque sed voluptates inventore. Asperiores numquam
          ipsa debitis possimus dignissimos, provident nostrum sed omnis quod
          voluptatum maxime enim ducimus voluptatem deserunt perspiciatis
          dolorum reprehenderit corrupti placeat doloremque reiciendis ad
          quibusdam odit? Autem quae error quaerat ducimus, quod doloremque
          libero repellendus? Praesentium fugiat aliquid a quo earum? Numquam
          quas sit praesentium quo unde. Facilis, harum expedita assumenda
          tenetur fuga debitis ipsa, deleniti sit, commodi itaque quia nobis
          esse. Nihil qui repudiandae eligendi voluptas eum, recusandae et!
          Asperiores reiciendis ipsa laudantium ab maxime libero dignissimos
          facilis mollitia saepe accusamus nam tenetur, iusto numquam? Quia
          aspernatur ut sint repudiandae error officia! Aliquid, sapiente
          nostrum minus voluptate sequi ratione earum iure quas totam blanditiis
          aspernatur architecto illum dolore dolorum tenetur facere esse
          repudiandae mollitia ex ipsum quia. In sint inventore esse corporis,
          facere accusantium expedita repellat qui, ratione a asperiores
          doloremque quam magni iure saepe soluta cum dicta aspernatur. Iusto
          perspiciatis numquam in facere nam ipsa, accusamus quidem placeat sed,
          sequi ex! Minus rem ratione molestias, officiis nam autem. Illo, quos?
          Eaque esse eligendi repellat tempora perspiciatis laborum illo ratione
          repudiandae, totam doloribus, sapiente omnis fuga quis amet officia
          ipsam aut similique itaque! Voluptatum, amet dolore quisquam
          laboriosam ipsa numquam, asperiores enim reprehenderit blanditiis
          saepe id hic at vitae, sunt sed ducimus. Placeat quisquam at dolor
          ullam aliquid aspernatur in, numquam eos blanditiis labore nobis
          voluptatibus hic ratione, doloribus deserunt veritatis vero
          consectetur, esse quod. Voluptatum, ipsa voluptatibus, expedita
          tempore fuga saepe et alias explicabo accusantium quaerat cupiditate
          voluptates tempora optio qui doloribus maiores recusandae omnis nemo
          dolores aperiam temporibus ex. Minus repellendus porro veritatis
          perspiciatis, consequatur eos facere a sit ipsa dicta commodi tempora
          laudantium iure necessitatibus inventore nam non, adipisci dolore
          soluta aliquid! Neque eius praesentium est corrupti ullam laborum quis
          similique nulla nesciunt, inventore quos numquam dolor harum officiis
          autem, eum aliquam tenetur quia incidunt magni perferendis nemo
          deserunt eaque! Obcaecati quam officia numquam a distinctio pariatur
          tempore deleniti quae earum, necessitatibus dignissimos dolor nam
          porro fugiat hic ex aliquam, neque qui. Corrupti nobis voluptate,
          reprehenderit distinctio consectetur culpa qui amet pariatur unde
          fugiat accusantium illo id iusto assumenda eius repellat dignissimos a
          recusandae porro aspernatur. Voluptatem corporis expedita minima
          corrupti nemo sequi quis placeat, natus beatae voluptatibus earum
          laboriosam temporibus ad qui fuga aut dolor iure esse tenetur nihil
          autem voluptate aliquid? Aspernatur, est delectus quas iste neque
          ullam unde minima dignissimos possimus hic laboriosam! Expedita ex
          saepe dolores iste dolorum sunt sapiente architecto illum laborum
          repudiandae tempore quae quod, voluptate aspernatur atque provident ut
          nulla maxime consequuntur dolore veritatis porro eum et? Deserunt,
          illum a.
        </div>
        <div className="container mx-auto flex h-screen flex-col items-center justify-center">
          <div className="text-7xl font-extrabold italic">Too Fast</div>
          <div
            ref={tooFastRef}
            className={`m-3 rounded-md p-3 text-3xl md:text-7xl ${theme === "Dark" ? "bg-slate-900 text-indigo-300" : "bg-slate-400 text-indigo-800"}  font-extrabold`}
          ></div>
          <div className="text-center text-3xl font-extrabold ">
            Scroll to read todays top headlines!
          </div>
        </div>
      </header>
      <section>
        <News />
      </section>
      <section>
        <OurAPI />
      </section>
    </main>
  );
}
