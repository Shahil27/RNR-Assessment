using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RNR_Assessment.Data;
using RNR_Assessment.Models;

namespace RNR_Assessment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Route("[controller]")]
    public class BreakdownsController : ControllerBase
    {
        private readonly BreakDownDbContext _context;

        public BreakdownsController(BreakDownDbContext context)
        {
            _context = context;
        }

        // GET: api/Breakdowns
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Breakdown>>> GetBreakdowns()
        {
          if (_context.Breakdowns == null)
          {
              return NotFound();
          }
            return await _context.Breakdowns.ToListAsync();
        }

        // GET: api/Breakdowns/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Breakdown>> GetBreakdown(int id)
        {
          if (_context.Breakdowns == null)
          {
              return NotFound();
          }
            var breakdown = await _context.Breakdowns.FindAsync(id);

            if (breakdown == null)
            {
                return NotFound();
            }

            return breakdown;
        }

        // PUT: api/Breakdowns/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBreakdown(int id, Breakdown breakdown)
        {
            if (id != breakdown.BreakdownId)
            {
                return BadRequest();
            }

            _context.Entry(breakdown).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BreakdownExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Breakdowns
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Breakdown>> PostBreakdown(Breakdown breakdown)
        {
            Guid guid = Guid.NewGuid();

          if (_context.Breakdowns == null)
          {
              return Problem("Entity set 'BreakDownDbContext.Breakdowns'  is null.");
          }

            breakdown.BreakdownReference = guid.ToString();

            _context.Breakdowns.Add(breakdown);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBreakdown", new { id = breakdown.BreakdownId }, breakdown);
        }

        // DELETE: api/Breakdowns/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBreakdown(int id)
        {
            if (_context.Breakdowns == null)
            {
                return NotFound();
            }
            var breakdown = await _context.Breakdowns.FindAsync(id);
            if (breakdown == null)
            {
                return NotFound();
            }

            _context.Breakdowns.Remove(breakdown);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BreakdownExists(int id)
        {
            return (_context.Breakdowns?.Any(e => e.BreakdownId == id)).GetValueOrDefault();
        }
    }
}
