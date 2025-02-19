import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Rating from "../rating";
const ListItem = ({ item, index }) => {
  const { name, email, product, image, amount, color } = item;

  return (
    <>
      <div className="flex flex-col sm:flex-row flex-wrap gap-7 sm:gap-4 w-full p-2 px-4  hover:bg-default-50 rounded-lg">
        <div className="flex-none flex flex-wrap items-center gap-3">
          <div className="relative inline-block">
            <Avatar>
              <AvatarImage src={image.src} />
            </Avatar>
          </div>
          <div>
            <div className="text-sm font-medium text-default-800 mb-1 whitespace-nowrap">
              {name}
            </div>
            <div className="text-xs text-default-600 whitespace-nowrap">
              {email}
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center sm:justify-center">
          <div className="text-slate-800 dark:text-white border-spacing-2 rounded-xl  p-1.5 mx-1">
            {product}
          </div>
          <div className=" p-1.5 mx-1">
            <Rating />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListItem;
