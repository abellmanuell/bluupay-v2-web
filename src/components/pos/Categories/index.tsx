// Import Dependencies
import { Fragment, useLayoutEffect, useRef } from "react";
import { register, SwiperContainer } from "swiper/element/bundle";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import invariant from "tiny-invariant";

// Local Imports
import { useLocaleContext } from "@/app/contexts/locale/context";
import { Button, Card } from "@/components/ui";

// ----------------------------------------------------------------------

interface Category {
  uid: string;
  name: string;
  image: string;
}

const items: Category[] = [
  {
    uid: "1",
    name: "Burger",
    image: "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg",
  },
  {
    uid: "2",
    name: "Hot Dog",
    image: "https://static01.nyt.com/images/2024/06/28/multimedia/28GRILL-HOTDOGS-REX-cqwj/01GRILL-HOTDOGS-REX-cqwj-mediumSquareAt3X.jpg",
  },
  {
    uid: "3",
    name: "Pizza",
    image: "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg",
  },
  {
    uid: "4",
    name: "Sandwich",
    image: "https://indianakitchen.com/wp-content/uploads/2015/03/Ham-Sandwich.jpg",
  },
  {
    uid: "5",
    name: "Popcorn",
    image: "https://www.100daysofrealfood.com/wp-content/uploads/2011/06/popcorn1.jpg",
  },
  {
    uid: "6",
    name: "Taco",
    image: "https://flavorthemoments.com/wp-content/uploads/2024/07/ground-beef-tacos-1.jpg",
  },
  {
    uid: "7",
    name: "Burrito",
    image: "https://static01.nyt.com/images/2024/01/10/multimedia/AS-Burrito-vzhk/AS-Burrito-vzhk-mediumSquareAt3X.jpg",
  },
  {
    uid: "8",
    name: "Pizza",
    image: "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg",
  },
  {
    uid: "9",
    name: "Burrito",
    image: "https://static01.nyt.com/images/2024/01/10/multimedia/AS-Burrito-vzhk/AS-Burrito-vzhk-mediumSquareAt3X.jpg",
  },
];

register();

export function Categories() {
  const { direction } = useLocaleContext();
  const carouselRef = useRef<SwiperContainer>(null);

  useLayoutEffect(() => {
    invariant(carouselRef.current, "carouselRef is null");
    const params = {
      navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
      },
    };

    Object.assign(carouselRef.current, params);

    setTimeout(() => {
      carouselRef.current?.initialize();
    });
  }, []);

  return (
    <>
      {/* @ts-expect-error - Swiper web components */}
      <swiper-container
        ref={carouselRef}
        init="false"
        slides-per-view="auto"
        dir={direction}
        space-between="16"
      >
        <span slot="container-start">
          <div className="flex min-w-0 items-center justify-between pb-3">
            <p className="dark:text-dark-100 truncate text-base font-medium text-gray-800">
              Categories
            </p>
            <div className="flex">
              <Button
                isIcon
                className="prev-btn size-7 rounded-full"
                variant="flat"
              >
                <ChevronLeftIcon className="size-5 rtl:rotate-180" />
              </Button>
              <Button
                isIcon
                className="next-btn size-7 rounded-full"
                variant="flat"
              >
                <ChevronRightIcon className="size-5 rtl:rotate-180" />
              </Button>
            </div>
          </div>
        </span>

        {items.map(({ uid, name, image }) => (
          <Fragment key={uid}>
            {/* @ts-expect-error - Swiper web components */}
            <swiper-slide class="w-24">
              <Card className="dark:text-dark-100 w-full shrink-0 cursor-pointer px-2 py-4 text-center text-gray-800">
                <img
                  alt={name}
                  src={image}
                  loading="lazy"
                  className="mx-auto w-12 h-12"
                />
                <p className="truncate pt-2 font-medium tracking-wide">
                  {name}
                </p>
              </Card>
              {/* @ts-expect-error - Swiper web components */}
            </swiper-slide>
          </Fragment>
        ))}
        {/* @ts-expect-error - Swiper web components */}
      </swiper-container>
    </>
  );
}
