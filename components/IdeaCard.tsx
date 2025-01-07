
import Link from "next/link";
import { formatDate } from "@/lib/utils";

import { EyeIcon } from "lucide-react"

const IdeaCard = ({ post }: { post: IdeaTypeCard}) => {
  return (
    <li className="idea-card group">
      <div className="flex-between">
        <p className="idea_card_date">
          {formatDate(post._createdAt)}
        </p>

        <div className="flex gap-2">
          <EyeIcon className='size-7 text-lime-500'/>
          <span className="text-16-medium">{post.views}</span>
        </div>

        <div className="flex-between mt-5 gap-5">
          <div className="flex-1">
            <Link href={`/user/${post.author?._id}`}>
              <p className="text-16-medium line-clamp-1">{post.author?.name}</p>
            </Link>
          </div>
        </div>
      </div>
    </li>
  )
}

export default IdeaCard