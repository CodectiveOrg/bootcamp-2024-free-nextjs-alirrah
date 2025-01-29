"use client";

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { CommentType } from "@/types/comment.type";

import { SearchContext } from "@/app/doctor/[id]/providers/search/search.provider";

type ContextValue = {
  filteredComments: CommentType[];
};

export const CommentsContext = createContext<ContextValue>({
  filteredComments: [],
});

type Props = PropsWithChildren & {
  comments: CommentType[];
};

export default function CommentsProvider({ children, comments }: Props) {
  const { search } = useContext(SearchContext);

  const [filteredComments, setFilteredComments] = useState<CommentType[]>([]);

  const isVisible = useCallback(
    (comment: CommentType): boolean => {
      if (!search.query) {
        return true;
      }

      return comment.description
        .toLowerCase()
        .includes(search.query.toLowerCase());
    },
    [search],
  );

  useEffect(() => {
    const filteredComments = comments.filter(isVisible);

    filteredComments.sort((firstComment, secondComment) => {
      if (search.ordering === "topRating") {
        return secondComment.rate - firstComment.rate;
      }
      if (search.ordering === "lowRating") {
        return firstComment.rate - secondComment.rate;
      }

      const dateSecondComment = new Date(secondComment.dateTime).getTime();
      const dateFirstComment = new Date(firstComment.dateTime).getTime();

      if (search.ordering === "timeNewest") {
        return dateSecondComment - dateFirstComment;
      }
      return dateFirstComment - dateSecondComment;
    });

    setFilteredComments(filteredComments);
  }, [search, isVisible, comments]);

  return (
    <CommentsContext.Provider value={{ filteredComments }}>
      {children}
    </CommentsContext.Provider>
  );
}
