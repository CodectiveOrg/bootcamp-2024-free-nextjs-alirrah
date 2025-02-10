import CardComponent from "@/components/card/card.component";

import { comments } from "@/mock/comments";

import CommentsResultComponent from "@/app/doctor/[id]/components/comments-result/comments-result.component";
import CommentsTitleComponent from "@/app/doctor/[id]/components/comments-title/comments-title.component";

import SearchProvider from "@/app/doctor/[id]/providers/search/search.provider";
import CommentsProvider from "@/app/doctor/[id]/providers/comments/comments.provider";

type Props = {
  name: string;
};

export default function CommentComponent({ name }: Props) {
  return (
    <SearchProvider>
      <CommentsProvider comments={comments}>
        <CardComponent
          showShadow
          title={<CommentsTitleComponent />}
          outsideTitle={`نظرات در مورد ${name}`}
        >
          <CommentsResultComponent />
        </CardComponent>
      </CommentsProvider>
    </SearchProvider>
  );
}
