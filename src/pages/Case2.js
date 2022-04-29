import {
  Card,
  CardActions,
  CardContent,
  Container,
  IconButton,
  Typography,
  IconButtonProps,
} from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Case2() {
  type IComment = {
    commentId: number,
    commentContent: string,
    replies?: IComment[],
  };

  const comments: IComment[] = [
    {
      commentId: 1,
      commentContent: "Hai",
      replies: [
        {
          commentId: 11,
          commentContent: "Hai juga",
          replies: [
            {
              commentId: 111,
              commentContent: "Haai juga hai jugaa",
            },
            {
              commentId: 112,
              commentContent: "Haai juga hai jugaa",
            },
          ],
        },
        {
          commentId: 12,
          commentContent: "Hai juga",
          replies: [
            {
              commentId: 121,
              commentContent: "Haai juga hai jugaa",
            },
          ],
        },
      ],
    },
    {
      commentId: 2,
      commentContent: "Halooo",
    },
  ];

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log(comments);
  return (
    <>
      <Container>
        {comments.map((comment) => (
          <Card sx={{ my: 5 }} key={comment.id}>
            <CardContent>
              <Typography>{comment.commentContent}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <Typography>
                {comment.replies && comment.replies.length} comments
              </Typography>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                {comment.replies &&
                  comment.replies.map((replie) => (
                    <Typography>{replie.commentContent}</Typography>
                  ))}
                {/* <Typography>{comment.replies.commentContent}</Typography> */}
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </Container>
    </>
  );
}
