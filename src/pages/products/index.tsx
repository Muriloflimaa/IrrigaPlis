import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Banner from '../../components/Banner'
import ProductCard from '../../components/ProductCard'

function Products() {
   return (
      <div>
         <Banner title="nossos produtos" />
         <div className="my-16 px-4">
            <div className="max-w-7xl mx-auto mt-16">
               <div className="flex gap-3 items-center mb-8">
                  <h1 className="text-2xl font-medium text-primary">Tubos</h1>
                  <span className="text-base text-center text-[#008C4F] font-normal">
                     {`Ver todos os produtos desta categoria`}
                     <FontAwesomeIcon
                        icon={faChevronRight}
                        className="w-3 h-3"
                     />
                  </span>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
               </div>
            </div>
            <div className="max-w-7xl mx-auto mt-16">
               <div className="flex gap-3 items-center mb-8">
                  <h1 className="text-2xl font-medium text-primary">
                     Conexões
                  </h1>
                  <span className="text-base text-center text-[#008C4F] font-normal">
                     {`Ver todos os produtos desta categoria`}
                     <FontAwesomeIcon
                        icon={faChevronRight}
                        className="w-3 h-3"
                     />
                  </span>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
               </div>
            </div>
            <div className="max-w-7xl mx-auto mt-16">
               <div className="flex gap-3 items-center mb-8">
                  <h1 className="text-2xl font-medium text-primary">
                     Acessórios
                  </h1>
                  <span className="text-base text-center text-[#008C4F] font-normal">
                     {`Ver todos os produtos desta categoria`}
                     <FontAwesomeIcon
                        icon={faChevronRight}
                        className="w-3 h-3"
                     />
                  </span>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Products
