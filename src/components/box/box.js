import React, { useState } from 'react';
import "./box.css";

const Box = () => {

    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(141);
    const priceCount = 141;

    let minusCount = () => {
        if(count < 2) {
            return;
        }
        else {
            setCount((s) => s - 1);
            setPrice((p) => p = p - priceCount)
        }
    }
    let plusCount = () => {
        setCount((s) => s + 1)
        if(count > 0) {
            setPrice((p) => p = p + priceCount)
        }
    }


    return(
        <div className="block mt-6">
        <div className="block__container xl:flex justify-center lg:direction-column">
          <div className="block__box">
            <div className="block__images">
                <img src="/img/SM _ Product Active Photo.jpg" alt="sadasdasdasd"/>
            </div>
            <div className="block__content mt-12">
                <div className="block__header">
                    <h3>Ветчина и грибы</h3>
                    <p>₽ {price}</p>
                </div>
                <div className="block__choice mt-4">
                    <div className="block__rating">
                        <div className="block__star">
                            <img src="/img/SM _ Star unfilled.svg" alt="sadasdasdasd"/>
                            <img src="/img/SM _ Star unfilled.svg" alt="sadasdasdasd"/>
                            <img src="/img/SM _ Star unfilled.svg" alt="sadasdasdasd"/>
                            <img src="/img/SM _ Star unfilled.svg" alt="sadasdasdasd"/>
                            <img src="/img/SM _ Star unfilled.svg" alt="sadasdasdasd"/>
                        </div>
                        <p className="mt-2">20 отзывов</p>
                    </div>
                    <div className="block__list">
                        <div className="block__item"><p>Убрать лук</p></div>
                        <div className="block__item"><p>Убрать лук</p></div>
                        <div className="block__item"><p>Убрать лук</p></div>
                        <div className="block__item"><p>Убрать лук</p></div>
                        <div className="block__item"><p>Убрать лук</p></div>
                    </div>
                </div>
                <div className="block__information mt-4">
                    <h3 className="pt-4 md:ml-5 sm:ml-5 all:ml-5">Описание</h3>
                    <p className="mt-4 md:ml-5 sm:ml-5 all:ml-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore , sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore , sed do eiusmod tempor incididunt ut labore</p>
                    <span className="md:ml-5 sm:ml-5 all:ml-5">425 gr</span>
                    <div className="block__inner">
                        <div className="block__count">
                            <div className="block__minus" onClick={minusCount}>-</div>
                                <p className="block__result">{count}</p>
                            <div className="block__plus" onClick={plusCount}>+</div>
                        </div>
                        <button className="btn bg-red-600">В корзину</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
    )
}


export default Box;
