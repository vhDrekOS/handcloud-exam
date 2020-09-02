using HandCloud.Backend.Models;
using System.Linq;
using System.Threading.Tasks;

namespace HandCloud.Backend.Repositories
{
    public class CarRepository : Repository<Car, HandCloudContext>, ICarRepository
    {
        private readonly HandCloudContext _context;

        public CarRepository(HandCloudContext context) : base(context)
        {
            _context = context;
        }

        //public async Task<bool> ExisAsync(int id)
        //{
        //    return await _context.Car.Any(c => c.Id.Equals(id));
        //}
    }
}