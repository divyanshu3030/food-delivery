import { CiBowlNoodles } from "react-icons/ci";
import { GiFullPizza } from "react-icons/gi";
import { MdOutlineFoodBank, MdOutlineFreeBreakfast } from "react-icons/md";
import { SiBurgerking } from "react-icons/si";
import { TbSoup } from "react-icons/tb";
import { TiThSmallOutline } from "react-icons/ti";

const categories = [
    {
        id: 1,
        name: "All",
        image: <TiThSmallOutline className="w-15 h-15 text-green-600"/>,
    },

    {
        id: 2,
        name: "Breakfast",
        image: <MdOutlineFreeBreakfast className="w-15 h-15 text-green-600"/>,
    },

    {
        id: 3,
        name: "Soups",
        image: <TbSoup className="w-15 h-15 text-green-600"/>,
    },

    {
        id: 4,
        name: "Pasta",
        image: <CiBowlNoodles className="w-15 h-15 text-green-600"/>,
    },

    {
        id: 5,
        name: "Main_course",
        image: <MdOutlineFoodBank className="w-15 h-15 text-green-600"/>,
    },

    {
        id: 6,
        name: "Pizza",
        image: <GiFullPizza className="w-15 h-15 text-green-600"/>,
    },

    {
        id: 7,
        name: "Burger",
        image: <SiBurgerking className="w-15 h-15 text-green-600"/>,
    },
]

export default categories;