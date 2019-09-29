using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Infrastructure.DataLayer.Interfaces;
using Infrastructure.DataLayer.Entities;
using API.Requests;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        public IRepository _repository;
        public UserController(IRepository repository)
        {
            _repository = repository;

        }
        // GET: api/User
        [HttpGet("get")]
        public async Task<ActionResult> Get()
        {
            return new OkObjectResult (await  _repository.GetAll());
        }

        // GET: api/User/5
        [HttpGet("{id}", Name = "Get")]
        public async Task<ActionResult> Get(int id)
        {
            var user = await _repository.Get(id);
            return new OkObjectResult(user);
        }

        // POST: api/User
        [HttpPost("addUser")]
        public async Task<ActionResult> AddUser([FromBody] UserRequest user)
        {
            User newUser = new User()
            {
                Name = user.Name,
                EmailAddress = user.EmailAddress,
                Password = user.Password,
                Points = user.Points
            };

            await _repository.AddUser(newUser.Name, newUser.EmailAddress, newUser.Password);
            return Ok(newUser);
        }

        // PUT: api/User/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await _repository.DeleteUser(id);
            return Ok();
        }
    }
}
