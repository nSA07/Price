import Head from 'next/head';
import client from 'contentful/contentful';
import Image from 'next/image';

import HeadLogo from '../assets/header/header-img.svg'
import CupImg from '../assets/pusk/pusk-cup.svg'
import PuskImg from '../assets/pusk/pusk-img.svg'
import TBBLogo from '../assets/bag/logo-bag.svg'
import Octopus from '../assets/bag/octopus-bag.png'
import LogoFunt from '../assets/coffee/logo-funt.svg'
import Wave from '../assets/coffee/funt-wave.svg'
import TBB from '../assets/tbb/tbb-logo.png'
import Lemon from '../assets/bf/lemon-logo.svg'
import BFLogo from '../assets/bf/bf-logo.svg'
import Orange from '../assets/bf/orange-logo.svg'
import Done from '../assets/bf/done-icon.svg'
import None from '../assets/bf/none-icon.svg'
import NEW from '../assets/new.png'


export async function getServerSideProps() {

  const pusk = await client.getEntries({ content_type: 'pusk' });
  const bag = await client.getEntries({ content_type: 'bag' });
  const funt = await client.getEntries({ content_type: 'funtCoffee' });
  const bf = await client.getEntries({ content_type: 'blackFox' });
  const tbb = await client.getEntries({ content_type: 'tbb' })

  return {
    props: {
      pusk: pusk.items,
      bag: bag.items,
      funt: funt.items,
      bf: bf.items,
      tbb: tbb.items
    }
  }
}

export default function Home({pusk, bag, funt, bf, tbb}) {
  return (
    <>
      <Head>
        <title>Price Funt</title>
        <meta name="viewport" content="width=device" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">
        <header className="header">
          <div className="header__wrap">
            <div className="header__bg"></div>
            <div className="header__container">
              <div className="header__content">
                <p className="header__content-descriptions">
                  Смажимо та відправляємо замовлення з понеділка по п’ятницю. Відправимо у той
                  же день, якщо зробите замовлення до 14 години. Доставка Новою Поштою по
                  Україні, за рахунок одержувача. Безкоштовна доставка при замовленні від 10 кг.
                  Ціна на каву може бути нижча. Це залежить від об’єму замовлення. Усі деталі
                  можна дізнатися за номером.
                </p>
                <div className="header__content-adress">
                  <Image
                    src={HeadLogo}
                    alt='header-logo'
                  />
                  <p className="header__content-text">
                    ТОВ “Кофе Групп”
                    0673298771 м. Дніпро
                    zakaz@funtcoffee.com.ua
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="page">
          <section className="pusk">
            <div className="pusk__container">
              <div className="pusk__inner">
                <div className="pusk__logo">
                  <Image
                      src={PuskImg}
                      alt='header-logo'
                  />
                  <span>перша українська розчинна спешелті кава</span>
                </div>
                  <Image
                      src={CupImg}
                      alt='header-logo'
                    />
              </div>
              <div className="descriptions">
                Мінімальне замовлення 10 упаковок. Ціна продажу у кав’ярні 225 гривень. Одна упаковка – 5 порцій кави .Срок придатності 6 місяців з дати виробництва, вказана на саше та на коробці.
              </div>
              <ul className="price__list">
                <ul className="price__hero-list">
                  <li className="price__hero-item">
                    Ціна, грн.
                  </li>
                  <li className="price__hero-item">
                    Рекомендована ціна, грн.
                  </li>
                </ul>
                {pusk.map((items) => (
                  <li key={items.sys.id} className="price__item">
                      {items.fields.new && (
                        <Image
                          className='new'
                          src={NEW}
                          alt="new"
                        />
                      )}
                    <div className="price__item-inner">
                      <div className="price__item-name">
                        <span>{items.fields.name}</span>
                        <p>Розчинна кава:<br />{items.fields.country}</p>
                      </div>
                      <div className="price__item-descriptions">
                        {items.fields.descriptions}
                      </div>
                    </div>
                    <div className="price__item-wrap">
                      <div className="price__item-method">
                      </div>
                      <div className="price__item-cost">
                        {items.fields.price}$
                      </div>
                      <div className="price__item-cost">
                        {items.fields.recomendatePrice}$
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="bag">
            <div className="bag__container">
              <div className="bag__inner">
                <div className="bag__logo">
                  <Image
                    src={TBBLogo}
                    alt="bag-logo" 
                  />
                </div>
                <Image
                  className="bag__img"
                  src={Octopus}
                  alt="octopus"
                />
              </div>
              <div className="descriptions">
                Мінімальне замовлення 10 упаковок. Ціна продажу у кав’ярні 225 гривень. Одна упаковка – 5 порцій кави .Срок придатності 6 місяців з дати виробництва, вказана на саше та на коробці.
              </div>
              <ul className="price__list">
                <ul className="price__hero-list">
                  <li className="price__hero-item">
                    Ціна, грн.
                  </li>
                  <li className="price__hero-item">
                    Рекомендована ціна, грн.
                  </li>
                </ul>
                  {bag.map((items) => (
                    <li key={items.sys.id} className="price__item">
                      {items.fields.new && (
                        <Image
                          className='new'
                          src={NEW}
                          alt="new"
                        />
                      )}
                      <div className="price__item-inner">
                        <div className="price__item-name">
                          <span>{items.fields.name}</span>
                          <p>{items.fields.subtitle}</p>
                        </div>
                        <div className="price__item-descriptions">
                          {items.fields.descriptions} 
                        </div>
                      </div>
                      <div className="price__item-wrap">
                        <div className="price__item-method">
                        </div>
                        <div className="price__item-cost">
                        {items.fields.price}$
                        </div>
                        <div className="price__item-cost">
                        {items.fields.recomendatePrice}$
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </section>
          <section className="coffee">
            <div className="coffee__container">
              <div className="coffee__inner">
                <div className="coffee__logo">
                  <Image 
                    src={LogoFunt}
                    alt="bag-logo" 
                  />
                </div>
                <Image 
                  className="coffee__img" 
                  src={Wave}
                  alt="cup" 
                />
              </div>
              <div className="descriptions">
                Мінімальне замовлення 10 упаковок. Ціна продажу у кав’ярні 225 гривень. Одна упаковка – 5 порцій кави .Срок придатності 6 місяців з дати виробництва, вказана на саше та на коробці.
              </div>
              <ul className="price__list">
                <ul className="price__hero-list">
                  <li className="price__hero-item">
                    Ціна, грн.
                  </li>
                  <li className="price__hero-item">
                    Рекомендована ціна, грн.
                  </li>
                </ul>
                  {funt.map((items) => (
                    <li key={items.sys.id} className="price__item">
                      {items.fields.new && (
                        <Image
                          className='new'
                          src={NEW}
                          alt="new"
                        />
                      )}
                      <div className="price__item-inner">
                        <div className="price__item-name">
                          <span>{items.fields.name}</span>
                          <p>{items.fields.country}</p>
                        </div>
                        <div className="price__item-descriptions">
                          {items.fields.description}
                        </div>
                      </div>
                      <div className="price__item-wrap">
                        <div className="price__item-method">
                        {items.fields.processing} <span>{items.fields.year}</span>
                        </div>
                        <div className="price__item-roast">
                          {items.fields.espresso && (
                          <Image 
                            src={"http:" + items.fields.espresso.fields.file.url}
                            width={items.fields.espresso.fields.file.details.image.width}
                            height={items.fields.espresso.fields.file.details.image.height}
                            alt="espr" 
                          />
                          )}
                          {items.fields.filter && (
                          <Image 
                            src={"http:" + items.fields.filter.fields.file.url}
                            width={items.fields.filter.fields.file.details.image.width}
                            height={items.fields.filter.fields.file.details.image.height}
                            alt="espr" 
                          />
                          )}
                        </div>
                        <div className="price__item-cost">
                        {items.fields.price}$
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
			    </section>
          <section className="tbb">
            <div className="tbb__container">
              <div className="tbb__inner">
                <Image 
                  src={TBB}
                  alt="tbb-logo" 
                />
              </div>
              <div className="descriptions">
                Мінімальне замовлення 10 упаковок. Ціна продажу у кав’ярні 225 гривень. Одна упаковка – 5 порцій кави .Срок придатності 6 місяців з дати виробництва, вказана на саше та на коробці.
              </div>
              <ul className="price__list">
                <ul className="price__hero-list">
                  <li className="price__hero-item">
                    Ціна, грн.
                  </li>
                  <li className="price__hero-item">
                    Рекомендована ціна, грн.
                  </li>
                </ul>
                  {tbb.map((items) => (
                    <li key={items.sys.id} className="price__item">
                      {items.fields.new && (
                        <Image
                          className='new'
                          src={NEW}
                          alt="new"
                        />
                      )}
                      <div className="price__item-inner">
                        <div className="price__item-name">
                          <span>{items.fields.name}</span>
                          <p>{items.fields.country}</p>
                        </div>
                        <div className="price__item-descriptions">
                          {items.fields.description}
                        </div>
                      </div>
                      <div className="price__item-wrap">
                        <div className="price__item-method">
                        {items.fields.processing} <span>{items.fields.year}</span>
                        </div>
                        <div className="price__item-roast">
                          {items.fields.espresso && (
                          <Image 
                            src={"http:" + items.fields.espresso.fields.file.url}
                            width={items.fields.espresso.fields.file.details.image.width}
                            height={items.fields.espresso.fields.file.details.image.height}
                            alt="espr" 
                          />
                          )}
                          {items.fields.filter && (
                          <Image 
                            src={"http:" + items.fields.filter.fields.file.url}
                            width={items.fields.filter.fields.file.details.image.width}
                            height={items.fields.filter.fields.file.details.image.height}
                            alt="espr" 
                          />
                          )}
                        </div>
                        <div className="price__item-cost">
                        {items.fields.price}$
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
			    </section>
          <section className="bf">
            <div className="bf__container">
              <div className="bf__inner">
                <Image 
                  src={Lemon}
                  alt="lemon" 
                />
                <Image 
                  src={BFLogo}
                  alt="bf-lemon" 
                />
                <Image  
                  src={Orange}
                  alt="orange" 
                />
              </div>
              <div className="descriptions">
                Мінімальне замовлення один ящик (12 пляшок, можнa в асортименті). Доставка здійснюється за рахунок покупця. Замовлення, прийняті до 16 години, відправляємо у той же день, з понеділка по п’ятницю.
              </div>
              <ul className="price__list bg-bf">
                <span className="price__list-description">bottle 0,33 L</span>
                <ul className="price__hero-list">
                  <li className="price__hero-item">
                    Ціна, грн.
                  </li>
                  <li className="price__hero-item">
                    Рекомендована ціна, грн.
                  </li>
                </ul>
                {bf.map((item) => (
                <li key={item.sys.id} className="price__item bf-line">
                  <div className="price__item-inner">
                    <div className="price__item-name">
                      <span>{item.fields.name}</span>
                    </div>
                    <div className="price__item-descriptions">
                      {item.fields.descriptions}
                    </div>
                  </div>
                  <div className="price__item-wrap">
                    {item.fields.reality === true ? (
                      <div className="price__item-reality">
                        <div className="price__item-icon">
                        <Image 
                          src={Done}
                          alt="done" 
                        />
                        </div>
                        <span>Готовий до відправки</span>
                      </div>
                    ) : (
                      <div className="price__item-reality">
                        <div className="price__item-icon">
                        <Image  
                          src={None}
                          alt="none" 
                        />
                        </div>
                        <span>Нємає в наявності</span>
                      </div>
                    )}
                    <div className="price__item-cost">
                      {item.fields.price}$
                    </div>
                    <div className="price__item-cost">
                      {item.fields.recommendationPrice}$
                    </div>
                  </div>
                </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="footer__container">
            <span>© 2023 Funt Coffee - All Rights Reserved.</span>
          </div>
        </footer>
	    </div>
    </>
  )
}
