
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { formatDate } from "@/lib/utils";

import { EyeIcon } from "lucide-react"

// custom class: flex-between

const IdeaCard = ({ post }: { post: IdeaTypeCard}) => {

  // Destructured props from root home page.tsx
  const { _createdAt, views, author: { _id: authorId, name }, title , description, category, _id, image } = post;

  return (
    <li className="idea_card group">
      <div className="flex-between">
        <p className="idea_card_date">
          {formatDate(_createdAt)}
        </p>

        <div className="flex gap-2">
          <EyeIcon className='size-7 text-lime-500'/>
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">
              {title}
            </h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image src='https://placehold.co/48x48' alt='image placeholder' width={50} height={50} className="rounded-full border-2 border-blue-500" />
        </Link>
      </div>

      <Link href={`/user/${authorId}`}>
        <p className="idea_card_desc">{description}</p>
        <img src={image} alt='placeholder' className="idea_card_img" />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className='idea_card_btn'>
          <Link href={`/startup/${_id}`}>
            Details
          </Link>
        </Button>
      </div>

    </li>
  )
}

export default IdeaCard