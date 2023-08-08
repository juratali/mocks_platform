import { useMutation, useQuery } from "react-query";
import { resultService } from "../../../services";

const useResults = (examId) => {
  const allAreTrue = useQuery(["result", "areFilled"], {
    queryFn: () => resultService.allAreTrue(examId),
    retry: 0,
    refetchOnMount: true,
  });

  const resultSender = useMutation({
    mutationFn: (examId) => resultService.send(examId),
  });

  const checkStatus = useQuery(["sendingStatus"], {
    queryFn: () => resultService.checkStatus(examId),
  });

  return {
    allAreTrue,
    resultSender,
    checkStatus,
  };
};

export default useResults;
