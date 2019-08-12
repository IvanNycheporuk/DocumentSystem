namespace DocumentSystem.API.API
{
    public interface IResult
    {
        Status Status { get; }
        string Message { get; }
    }
    public interface IResult<TData>: IResult
    {
        TData Data { get; }
    }
}