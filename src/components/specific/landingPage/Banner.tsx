import { IconType } from "react-icons";
import { Container } from "../../index";

interface BannerItem {
  title: string;
  icon: IconType;
}

type BannerProps = {
  itemsList: Array<BannerItem>;
  className?: string;
};

export function Banner({ itemsList, className }: BannerProps) {
  return (
    <Container
      className={
        className ||
        "w-full bg-default my-24 pt-4 px-8"
      }
    >
      <Container className="max-w-7xl mx-auto flex items-center justify-evenly">
        {itemsList.map((item, index) => (
          <Container key={index} className="flex flex-col items-center">
            <Container
              className="flex flex-col items-center justify-center bg-white rounded-full shadow-md w-20 h-20"
              key={index}
            >
              <Container className="items-center justify-center">
                <item.icon
                  className="text-5xl text-blue-500"
                  color="C54735"
                  size={38}
                />
              </Container>
            </Container>
            <h1 className="text-sm font-medium text-white pt-1 pb-1">
              {item.title}
            </h1>
          </Container>
        ))}
      </Container>

    </Container>
  );
}
