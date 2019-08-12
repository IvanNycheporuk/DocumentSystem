using System;

namespace DocumentSystem.API.API
{
    public class Result : IResult
    {
        public Status Status { get; }
        public string Message { get; }

        public static IResult Success => new Result(Status.Success);

        public Result(Status status, string message = null)
        {
            this.Status = status;
            this.Message = message;
        }
    }
    public class Result<TData> : Result, IResult<TData>
    {
        public TData Data { get; }

        public Result(TData data, Status status, string message = null): base(status, message)
        {
            this.Data = data;
        }
    }
}