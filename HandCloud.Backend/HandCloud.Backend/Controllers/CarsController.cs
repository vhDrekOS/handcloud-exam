using HandCloud.Backend.Models;
using HandCloud.Backend.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace HandCloud.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        private readonly ICarService _carService;

        public CarsController(ICarService carService)
        {
            _carService = carService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Car>>> Get()
        {
            return await _carService.GetAllAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Car>> Get(int id)
        {
            var carFinded = await _carService.GetAsync(id);
            if (carFinded == null)
            {
                return NotFound();
            }

            return carFinded;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Car Car)
        {
            if (ModelState.IsValid)
            {
                if (id != Car.Id)
                {
                    return BadRequest();
                }

                var updateResult = await _carService.UpdateAsync(Car);

                if (updateResult == null)
                    return BadRequest();

                return NoContent();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPost]
        public async Task<ActionResult<Car>> Post([FromBody] Car Car)
        {
            if (ModelState.IsValid)
            {
                var result = await _carService.AddAsync(Car);
                return CreatedAtAction(nameof(Get), new { id = result.Id }, result);
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var updateResult = await _carService.DeleteAsync(id);

            if (updateResult == null)
                return NotFound();

            return NoContent();
        }
    }
}