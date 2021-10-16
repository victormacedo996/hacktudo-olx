using Microsoft.EntityFrameworkCore;

namespace JogaPraOlx
{
    public class Context : DbContext
    {
        public Context(DbContextOptions options) : base(options)
        {

        }
    }
}