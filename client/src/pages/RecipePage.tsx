import Header from '../components/Header';
import recipe from '../assets/hero1.jpg';
import { Clock, Flame } from 'lucide-react';

export default function RecipePage() {
  return (
    <div>
      <div className="bg-emerald-500 min-h-72">
        <div className="w-[1440px] pt-12 mx-auto">
          <Header />
        </div>
      </div>
      <div className="flex w-5xl justify-between mx-auto absolute top-50 left-1/2 -translate-x-1/2 gap-16">
        <div>
          <div className="flex items-center text-lg text-white gap-6 mt-8">
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6" />
              <p>
                <span className="text-4xl font-bold mr-1"> 30</span>min
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-6 h-6" />
              <p>
                <span className="text-4xl font-bold mr-1"> 376</span> Calories
              </p>
            </div>
          </div>
          <h1 className="text-6xl font-bold mt-12 leading-16 mb">
            Keto Italian Beef With Cabbage Noodles
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ducimus optio in
            voluptatem minima, eligendi porro, perspiciatis ad, voluptates doloremque impedit est
            nostrum eius deserunt iste quaerat odit. Deserunt quis tempore aliquid, voluptatem
            excepturi autem quam sequi reprehenderit expedita eaque dicta nihil facere, corporis
            repellendus est, nulla rem ipsa velit.
          </p>
          <div className="border mt-12">
            <p>Ingredients</p>
          </div>
        </div>
        <img src={recipe} alt="recipe-image" className="h-[700px] w-md rounded-2xl object-cover" />
      </div>
    </div>
  );
}
