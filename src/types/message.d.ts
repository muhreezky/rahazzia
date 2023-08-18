type Message = {
  id: string;
  text: string;
  user_id: string;
  created_at: Date;
  replies: Reply[];
  recipient: UserAccount;
}