// ** Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { cn, fallbackAvatar } from "@/lib/utils";
import { isOwner } from "./utils";
import { CardsActivityGoal } from "@/components/activity-goal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import ShareCard from "./ShareCard";
import ShareCardRight from "./ShareCardRight";
import { StepProps, TeamMember } from "./types";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import useContractBuilder from "@/hooks/useContractBuilder";
import { Steps } from "@/contexts/ContractBuilderContext";

const Shares = ({ updateStep }: StepProps) => {
  const { members, dispatch } = useContractBuilder();
  const handleClickNext = () => {
    updateStep(1);
  };

  const handleClickBack = () => {
    updateStep(-1);
  };

  const handleUpdateGoal = (member: TeamMember, value: number) => {
    const _members = [...members];
    const newMember = {
      ...member,
      revenue: value,
    };
    const index = _members.findIndex((m) => m.id === member.id);
    const m = _members.splice(index, 1, newMember);

    dispatch({
      type: Steps.SHARES,
      payload: {
        members: _members,
      },
    });
  };

  return (
    <div className="grid grid-cols-2 h-full shadow-lg border rounded-3xl">
      <div className="w-full px-10 pb-7 pt-16 bg-modal rounded-s-3xl h-full flex flex-col justify-between">
        <div>
          <h6 className="text-2xl	mb-3">Now time to allocate shares</h6>
          <p className="text-muted-foreground mb-12 text-sm">
            Enter the appropriate amount of shares to everyone on the team
          </p>
          {members.map((member, index) => (
            <ShareCard
              key={index}
              member={member}
              updateGoal={(v) => handleUpdateGoal(member, v)}
            />
          ))}
        </div>
        <div className="flex justify-between w-full mt-8">
          <Button
            className="bg-mblue"
            variant="outline"
            onClick={handleClickBack}
          >
            <ArrowLeftIcon className="mr-1" />
            Back
          </Button>
          <Button
            className="bg-mblue"
            variant="outline"
            onClick={handleClickNext}
          >
            Next
            <ArrowRightIcon className="ml-1" />
          </Button>
        </div>
      </div>
      <div className="relative flex items-end px-4 flex-col py-7 bg-modal-foreground rounded-r-3xl">
        <div className="p-8 rounded-2xl bg-modal border border-muted w-full">
          <h6 className="text-2xl	mb-3">Team & Shares</h6>
          <p className="text-muted-foreground mb-7 text-sm">
            Artists participating in this contract.
          </p>
          <div className="pl-10">
            <h6 className="text-lg mb-3">Team Shares</h6>
            <p className="text-muted-foreground mb-7 text-sm">
              Artists participating in this contract.
            </p>
            <div className="pl-4 gap-10">
              {members.map((member, index) => (
                <ShareCardRight
                  key={index}
                  member={member}
                  updateGoal={(v) => handleUpdateGoal(member, v)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shares;
