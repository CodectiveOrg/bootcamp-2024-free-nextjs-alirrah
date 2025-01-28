import CardComponent from "@/components/card/card.component";

import CommentsResultComponent from "@/app/doctor/[id]/components/commentsResult/commentsResult.component";
import CommentsTitleComponent from "@/app/doctor/[id]/components/commentsTitle/commentsTitle.component";

import SearchProvider from "@/app/doctor/[id]/providers/search.provider";

type Props = {
  name: string;
};

export default function CommentComponent({ name }: Props) {
  return (
    <div>
      <b>نظرات در مورد {name}</b>
      <SearchProvider>
        <CardComponent title={<CommentsTitleComponent />}>
          <CommentsResultComponent />
        </CardComponent>
      </SearchProvider>
    </div>
  );
}
