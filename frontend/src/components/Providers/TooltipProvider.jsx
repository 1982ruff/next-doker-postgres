import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TooltipProvider = ({ hover, children }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{hover}</TooltipTrigger>
        <TooltipContent>
          <p>{children}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipProvider;
