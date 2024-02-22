'use client'

import { Icon } from "@/components";
import { Carousel, Flex, Image, Typography } from "antd";

const { Title, Text } = Typography;

export function CareerCard() {
  const props = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const careerCard = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/564x/19/b6/fa/19b6fa6c5ebfadd4945c70afe89f169d.jpg",
      name: "Tom Cruise",
      desc: "Founder & Chairman",
      icon: ["twittercareer", "instagramcareer", "incareer"],
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/564x/22/01/12/220112ce9c3967e2022ce13673a9d4f6.jpg",
      name: "Emma Watson",
      desc: "Managing Director",
      icon: ["twittercareer", "instagramcareer", "incareer"],
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/236x/f3/02/2f/f3022fba4b747194423fa90842925bfe.jpg",
      name: "Will Smith",
      desc: "Product Designer",
      icon: ["twittercareer", "instagramcareer", "incareer"],
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/236x/6a/5d/98/6a5d98eadc04ae67e6ab5bad864440c6.jpg",
      name: "Fray Cro",
      desc: "Founder",
      icon: ["twittercareer", "instagramcareer", "incareer"],
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/236x/d7/4e/91/d74e91697139b883ca86688b0c61b003.jpg",
      name: "Kelly Tom",
      desc: "Chairman",
      icon: ["twittercareer", "instagramcareer", "incareer"],
    },
  ];
  return (
      <Carousel {...props}>
        {careerCard.map((item) => (
          <Flex vertical key={item.id}>
            <Image
              preview={false}
              src={item.image}
              alt={item.name}
              className="h-96 w-72 mb-8 object-cover"
            />
            <Title level={2} className="mb-2 font-medium tracking-[1.28px]">
              {item.name}
            </Title>
            <Text className="block mb-4">{item.desc}</Text>
            <Flex gap={16}>
              {item.icon.map((i, index) => (
                <Icon key={index} type="svg" name={i} width={24} height={24} />
              ))}
            </Flex>
          </Flex>
        ))}
      </Carousel>
  );
}
